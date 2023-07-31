import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IOnboardingWebPartProps {
    documentTitle: string;
    currentUserDisplayName: string;
    storageList: string;
    acknowledgementLabel: string;
    acknowledgementMessage: string;
    readMessage: string;
    configured: boolean;
    context: WebPartContext;
}