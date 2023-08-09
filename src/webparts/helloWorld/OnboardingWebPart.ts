/*
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import * as strings from 'HelloWorldWebPartStrings';
*/

// import HelloWorldWebpart from './components/HelloWorldWebpart';
// import { HelloWorldWebpartProps } from './components/HelloWorldWebpartProps';

// import { spfi } from "@pnp/sp/presets/all";

// import { PropertyFieldListPicker } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';

// import {
//   ThemeProvider,
//   ThemeChangedEventArgs,
// } from "@microsoft/sp-component-base";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./OnboardingWebPart.module.scss";

export interface IOnboardingWebPartProps {
  documentTitle: string;
  description: string;
  storageList: string;
  acknowledgementLabel: string;
  acknowledgementMesage: string;
  readMessage: string;
}

/**
 * modify the HTMl in render() to change what gets displayed in the webpart (when added to the Sharepoint page)
 */
export default class OnboardingWebPart extends BaseClientSideWebPart<IOnboardingWebPartProps> {
  /**
   * This method is invoked later in render to serve as a listener for mouse input; if the user clicks on one of the circles that links to a video,
   * then the corresponding iFrame is hidden/revealed. The "querySelector(`styles._____}~" part determines what corresponding HTML element (whatever has
   * the ____ class/id applied) gets hidden/revealed
   */

  public imageListenerSetup(): void {
    console.log("beginning imageListenerSetup");
    const clickableImages = document.querySelectorAll(
      `.${styles.circletokens}`
    );
    const specialCaseImageBottom = document.querySelector(
      `#${styles.circletoken1}`
    );
    const specialCaseImageTop = document.querySelector(
      `#${styles.circletoken1videooverlay}`
    );
    console.log(clickableImages);
    clickableImages.forEach((image) => {
      if (image instanceof HTMLImageElement) {
        console.log("adding listener to:");
        console.log(image);
        image.addEventListener("click", () => {
          if (
            specialCaseImageTop !== null &&
            specialCaseImageBottom !== null &&
            specialCaseImageBottom instanceof HTMLImageElement &&
            specialCaseImageTop instanceof HTMLImageElement
          ) {
            if (specialCaseImageTop.id === image.id) {
              console.log("changing opacity of:");
              console.log(specialCaseImageTop);
              specialCaseImageBottom.style.opacity = "0";
            }
          }
          image.style.opacity = "0";
        });
      } else {
        // wrong type
      }
    });
  }

  public videoListenerSetup(): void {
    const clickableImage = document.querySelector(
      `#${styles.circletoken8}`
    ) as HTMLImageElement;
    const embeddedVideo0 = document.querySelector(
      `#${styles.embeddedvideo0}`
    ) as HTMLIFrameElement;
    embeddedVideo0.style.display = "none";
    // Add a click event listener to the image
    clickableImage.addEventListener("click", () => {
      // Toggle the display style of the embedded video
      if (embeddedVideo0.style.display === "none") {
        embeddedVideo0.style.display = "block";
      } else {
        embeddedVideo0.style.display = "none";
      }
    });

    // const clickableImage1 = document.querySelector(
    //   `#${styles.circletoken1videooverlay}`
    // ) as HTMLImageElement;
    // const embeddedVideo1 = document.querySelector(
    //   `#${styles.embeddedvideo1}`
    // ) as HTMLIFrameElement;
    // embeddedVideo1.style.display = "none";
    // // Add a click event listener to the image
    // clickableImage1.addEventListener("click", () => {
    //   // Toggle the display style of the embedded video
    //   if (embeddedVideo1.style.display === "none") {
    //     embeddedVideo1.style.display = "block";
    //   } else {
    //     embeddedVideo1.style.display = "none";
    //   }
    // });

    // const clickableImage2 = document.querySelector(
    //   `#${styles.circletoken0}`
    // ) as HTMLImageElement;
    // const embeddedVideo2 = document.querySelector(
    //   `#${styles.embeddedvideo2}`
    // ) as HTMLIFrameElement;
    // embeddedVideo2.style.display = "none";
    // // Add a click event listener to the image
    // clickableImage2.addEventListener("click", () => {
    //   // Toggle the display style of the embedded video
    //   if (embeddedVideo2.style.display === "none") {
    //     embeddedVideo2.style.display = "block";
    //   } else {
    //     embeddedVideo2.style.display = "none";
    //   }
    // });

    const backgroundImage = document.querySelector(
      `#${styles.circleimage}`
    ) as HTMLImageElement;
    backgroundImage.addEventListener("click", () => {
      // Disable any active embedded videos
      embeddedVideo0.style.display = "none";
      // embeddedVideo1.style.display = "none";
      // embeddedVideo2.style.display = "none";
    });
  }
  public render(): void {
    this.domElement.innerHTML = `
      <section class="${styles.onboarding} ${
      !!this.context.sdks.microsoftTeams ? styles.teams : ""
    }">
      <div class="${styles.welcome}">
      
      <div>
        <h2>Welcome, ${escape(this.context.pageContext.user.displayName)}!</h2>
        <div>From the Constitution Trail, follow the circle to arrive at Uptown Station!</div>
        <p></p>
      </div>
      
      <div class="${styles.imagecontainer}">
      
      <img id="${
        styles.circleimage
      }" alt="Uptown Circle" src="${require("./assets/gaming.jpg")}"/>
      
      <!-- Begin green tokens -->
      
        <img class="${styles.circletokenscompleted}" id="${
      styles.circletoken0
    }" alt="Intranet Intro" src="${require("./assets/intranetintro2.png")}"/>
        
        <img class="${styles.circletokenscompleted}" id="${
      styles.circletoken1green
    }" alt="Cybersecurity Training" src="${require("./assets/cybersecurity2.png")}"/>
        
            <img class="${styles.circletokenscompleted}" id="${
      styles.circletoken2
    }" alt="I&T Directives" src="${require("./assets/directives2.png")}"/>
            
            <img class="${styles.circletokenscompleted}" id="${
      styles.circletoken3
    }" alt="Service Desk" src="${require("./assets/service desk.png")}"/>
            
            <img class="${styles.circletokenscompleted}" id="${
      styles.circletoken4
    }" alt="Office 365" src="${require("./assets/office2.png")}"/>
            
            <img class="${styles.circletokenscompleted}" id="${
      styles.circletoken5
    }" alt="Executime" src="${require("./assets/executime2.png")}"/>
            
            <img class="${styles.circletokenscompleted}" id="${
      styles.circletoken6
    }" alt="Town Directory" src="${require("./assets/directory2.png")}"/>
            
            <img class="${styles.circletokenscompleted}" id="${
      styles.circletoken7
    }" alt="The Landing" src="${require("./assets/landing2.png")}"/>
            
            <img class="${styles.circletokenscompleted}" id="${
      styles.circletoken8green
    }" alt="Orientation / Overview" src="${require("./assets/orientation2.png")}"/>
        
      <!-- End green tokens -->
      
      <!-- Begin circle tokens -->
        <a href="https://normalil.sharepoint.com/:u:/s/InnovationandTechnologyDepartment2/EYTyj_4-kPFKj7xxRWjkuSIBEeJ4rTMpbnh3bxeby7bbZQ?e=1gGQDL" title="Intranet Intro" target="_blank">
        <img class="${styles.circletokens}" id="${
      styles.circletoken0
    }" alt="intwanet" src="${require("./assets/intranet.png")}"/></a>
          
        <!--the first token is the actual image, the second is invisible (0% opacity in CSS) and works with the TypeScript methods to toggle videos on and off-->
        <img class="${styles.circletokens}" id="${
      styles.circletoken1
    }" alt="Cybersecurity Training" src="${require("./assets/Cybersecurity.png")}"/>
          
        <a href="https://normalil.sharepoint.com/:u:/s/InnovationandTechnologyDepartment2/ER4xPStMEdRMvEpmOgQy5_IBL-ZZ3S2okeRfWMtzJOOCHw?e=aOmaDn" title="I&T Directives" target="_blank">
          <img class="${styles.circletokens}" id="${
      styles.circletoken1videooverlay
    }" alt="Cybersecurity Training" src="${require("./assets/Cybersecurity.png")}"/></a>
          
        <a href="https://normalil.sharepoint.com/sites/InnovationandTechnologyDepartment2/SitePages/I&T-Directives.aspx" title="I&T Directives" target="_blank">
        <img class="${styles.circletokens}" id="${
      styles.circletoken2
    }" alt="Cybersecurity Training" src="${require("./assets/Directives.png")}"/></a>
          
        <a href="https://normalil.sharepoint.com/sites/InnovationandTechnologyDepartment2/SitePages/Help-Desk.aspx" title="Help Desk" target="_blank">
        <img class="${styles.circletokens}" id="${
      styles.circletoken3
    }" alt="Cybersecurity Training" src="${require("./assets/service desk smojus.png")}"/></a>
          
        <a href="https://normalil.sharepoint.com/sites/InnovationandTechnologyDepartment2/SitePages/Microsoft-365.aspx" title="Office 365" target="_blank">
        <img class="${styles.circletokens}" id="${
      styles.circletoken4
    }" alt="Cybersecurity Training" src="${require("./assets/office.png")}"/></a>
          
        <a href="https://executime.normal.org:7120/ExecuTime/Index.do " title="Executime" target="_blank">
        <img class="${styles.circletokens}" id="${
      styles.circletoken5
    }" alt="Cybersecurity Training" src="${require("./assets/Executime.png")}"/></a>
          
        <a href="https://apps.gov.powerapps.us/play/e/default-6d112df9-2351-429b-9160-c1a6e0a277ee/a/ea02cd68-8005-4f4b-b697-5005525ead6e" title="Town Directory" target="_blank">
        <img class="${styles.circletokens}" id="${
      styles.circletoken6
    }" alt="Cybersecurity Training" src="${require("./assets/Directory.png")}"/></a>
          
        <a href="https://normalil.sharepoint.com/" title="The Landing" target="_blank">
        <img class="${styles.circletokens}" id="${
      styles.circletoken7
    }" alt="Cybersecurity Training" src="${require("./assets/landing.png")}"/></a>
          
        <img class="${styles.circletokens}" id="${
      styles.circletoken8
    }" alt="Cybersecurity Training" src="${require("./assets/orientation.png")}"/>
      
      <!-- End circle tokens -->
        
      <img alt="tree" id="${styles.tree}" src="${require("./assets/tree.png")}">

      <img alt="startarrow" id="${
        styles.startarrow
      }" src="${require("./assets/startarrow.png")}">

      <!-- These iframe(s) load the videos and get toggled on and off in the javascript separately -->
      <iframe width="1280" height="720" id="${
        styles.embeddedvideo0
      }" src="https://web.microsoftstream.com/embed/video/790449df-776d-4b84-8df8-5750c1c4eabe?autoplay=true&showinfo=false"
      allowfullscreen>
      </iframe>
        
    </section>
    `;

    this.imageListenerSetup();
    this.videoListenerSetup();

    // <iframe width="1280" height="720" id="${
    //       styles.embeddedvideo1
    //     }" src="https://web.microsoftstream.com/embed/video/45ddeae8-4f9b-4ab5-98bb-63182329bdb9?autoplay=true&showinfo=false"
    //     allowfullscreen>
    //     </iframe>
    // <iframe width="1280" height="720" id="${
    //   styles.embeddedvideo2
    // }" src="https://web.microsoftstream.com/embed/video/7f37778e-bfb3-4707-959a-1769f6fc4bb9?autoplay=true&showinfo=false"
    // allowfullscreen>
    // </iframe>
  }

  /*
  protected onInit(): Promise<void> {}

  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              throw new Error('Unknown host');
          }

          return environmentMessage;
        });
    }
    
    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }
  
  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
  */
}
