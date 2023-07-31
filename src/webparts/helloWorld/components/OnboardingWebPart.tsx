import * as React from 'react';
//import styles from '../OnboardingWebPart.module.scss';
import { IOnboardingWebPartProps } from './OnboardingWebPartProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import {FunctionComponent, useEffect, useState} from "react";
import {spfi} from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
//import { IItems } from '@pnp/sp/items';
import {
    Checkbox,
    Text,
    IStackTokens,
    //ITheme,
    Stack,
} from "office-ui-fabric-react";
//import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { Placeholder } from '@pnp/spfx-controls-react';

const sp = spfi();

const OnboardingWebPart: FunctionComponent<IOnboardingWebPartProps> = (
    props
) => {
    const [showMessage, setShowMessage] = useState<boolean>(true);

    // const { semanticColors }: IReadonlyTheme = props.themeVariant;

    useEffect (() => {
        if (props.storageList && props.storageList != "") {
            fetchData();
        }
    }, [props]); 
    
    const fetchData = async () => {
        console.log(props.storageList);
        const items: any[] = await sp.web.lists
        .getById(props.storageList)
        .items.select("Author/ID", "Author/Title", "Author/Name", "Title")
        .expand("Author")
        .top(1)
        .filter(
            `Author/Title eq '${props.currentUserDisplayName}' and Title eq '${props.documentTitle}'`
         )
         ();
        if (items.length === 0) {
            setShowMessage(true);
        }
    };

    const _onConfigure = () => {
        // Context of the web part
        props.context.propertyPane.open();
    }

    function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
        console.log(props.storageList)
        sp.web.lists.getById(props.storageList).items.add({
            Title: props.documentTitle,
        });

        setShowMessage(false);
    }

    const mainStackTokens: IStackTokens = {
        childrenGap: 5,
        padding: 10,
    };

    return props.configured ? (
        <Stack>
            {showMessage ? (
                <Stack tokens = {mainStackTokens}>
                    <Text>{props.acknowledgementMessage}</Text>
                    <Text variant = "large">'{props.documentTitle}'</Text>
                    <Checkbox
                        label={props.acknowledgementLabel}
                        onChange={_onChange}
                    /></Stack>
                        ) : (
                            <Stack>
                                <Text> {props.acknowledgementMessage}</Text>
                    <Text variant = "large">'{props.documentTitle}'</Text>
                    <Checkbox
                        label={props.acknowledgementLabel}
                        onChange={_onChange}
                    /></Stack>
                        )}
        </Stack>
             
    ) : (
        <Placeholder
            iconName='Edit'
            iconText="Configure Onboarding Webpart"
            description="Please configure the webpart by choosing a list."
            buttonLabel='Configure'
            onConfigure={_onConfigure}
        />
            );

};

export default OnboardingWebPart;