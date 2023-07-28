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
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';

export interface IHelloWorldWebPartProps {
  documentTitle: string;
  description: string;
  storageList: string;
  acknowledgementLabel: string;
  acknowledgementMesage: string;
  readMessage: string;
}

  

/**
 * Themodify the HTMl in render() to change what gets displayed in the webpart (when added to the Sharepoint page)
 */
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  /**
   * This method is invoked later in render to serve as a listener for mouse input; if the user clicks on one of the circles that links to a video, 
   * then the corresponding iFrame is hidden/revealed. The "querySelector(`styles._____}~" part determines what corresponding HTML element (whatever has 
   * the ____ class/id applied) gets hidden/revealed
   */
  public videoListenerSetup(): void {
    const clickableImage = document.querySelector(`#${styles.circletoken0}`) as HTMLImageElement;
    const embeddedVideo0 = document.querySelector(`#${styles.embeddedvideo0}`) as HTMLIFrameElement;
    embeddedVideo0.style.display = 'none';
    // Add a click event listener to the image
    clickableImage.addEventListener('click', () => {
    // Toggle the display style of the embedded video
    if (embeddedVideo0.style.display === 'none') {
      embeddedVideo0.style.display = 'block';
    } else {
      embeddedVideo0.style.display = 'none';
    }
  });
  
  const clickableImage1 = document.querySelector(`#${styles.circletoken1linkoverlay}`) as HTMLImageElement;
  const embeddedVideo1 = document.querySelector(`#${styles.embeddedvideo1}`) as HTMLIFrameElement;
  embeddedVideo1.style.display = 'none';
  // Add a click event listener to the image
  clickableImage1.addEventListener('click', () => {
    // Toggle the display style of the embedded video
    if (embeddedVideo1.style.display === 'none') {
      embeddedVideo1.style.display = 'block';
    } else {
      embeddedVideo1.style.display = 'none';
    }
  });

  const clickableImage2 = document.querySelector(`#${styles.circletoken8}`) as HTMLImageElement;
  const embeddedVideo2 = document.querySelector(`#${styles.embeddedvideo2}`) as HTMLIFrameElement;
  embeddedVideo2.style.display = 'none';
  // Add a click event listener to the image
  clickableImage2.addEventListener('click', () => {
  // Toggle the display style of the embedded video
  if (embeddedVideo2.style.display === 'none') {
    embeddedVideo2.style.display = 'block';
  } else {
    embeddedVideo2.style.display = 'none';
  }
  });

    const backgroundImage = document.querySelector(`#${styles.circleimage}`) as HTMLImageElement;
    backgroundImage.addEventListener('click', () => {
      // Disable any active embedded videos
      embeddedVideo0.style.display = 'none';
      embeddedVideo1.style.display = 'none';
      embeddedVideo2.style.display = 'none';
    });
  }
  public render(): void {
    this.domElement.innerHTML = `
    <section class="${styles.helloWorld} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
      <div class="${styles.welcome}">
      <div class="${styles.imagecontainer}">

        <img id="${styles.circleimage}" alt="Uptown Circle" src="${require('./assets/gaming.jpg')}"/>
        
        <!-- Begin circle tokens -->
          <img class="${styles.circletokens}" id="${styles.circletoken0}" alt="Cybersecurity Training" src="${require('./assets/orientation.png')}"/>
          
          <img class="${styles.circletokens}" id="${styles.circletoken1}" alt="Cybersecurity Training" src="${require('./assets/Cybersecurity.png')}"/>
          
          <img class="${styles.circletokens}" id="${styles.circletoken1linkoverlay}" alt="Cybersecurity Training" src="${require('./assets/Cybersecurity.png')}"/>

          <a href="https://apps.gov.powerapps.us/play/e/default-6d112df9-2351-429b-9160-c1a6e0a277ee/a/739c7295-0be1-424c-b1ca-21315796c1d9?tenantId=6d112df9-2351-429b-9160-c1a6e0a277ee&source=portal&screenColor=rgba%280%2c%2099%2c%20177%2c%201%29" title="I&T Directives" target="_blank">
          <img class="${styles.circletokens}" id="${styles.circletoken2}" alt="Cybersecurity Training" src="${require('./assets/Directives.png')}"/></a>
        
          <a href="https://servicedesk.normal.org:8080/HomePage.do?view_type=my_view" title="Help Desk" target="_blank">
          <img class="${styles.circletokens}" id="${styles.circletoken3}" alt="Cybersecurity Training" src="${require('./assets/helpdesk.png')}"/></a>
        
          <a href="https://normalil.sharepoint.com/sites/InnovationandTechnologyDepartment2/SitePages/Microsoft-365.aspx" title="Office 365" target="_blank">
          <img class="${styles.circletokens}" id="${styles.circletoken4}" alt="Cybersecurity Training" src="${require('./assets/office.png')}"/></a>
        
          <a href="https://executime.normal.org:7120/ExecuTime/Index.do " title="Executime" target="_blank">
          <img class="${styles.circletokens}" id="${styles.circletoken5}" alt="Cybersecurity Training" src="${require('./assets/Executime.png')}"/></a>
        
          <a href="https://apps.gov.powerapps.us/play/e/default-6d112df9-2351-429b-9160-c1a6e0a277ee/a/ea02cd68-8005-4f4b-b697-5005525ead6e?tenantId=6d112df9-2351-429b-9160-c1a6e0a277ee&source=portal&screenColor=rgba%2844%2c%20125%2c%20154%2c%201%29" title="Town Directory" target="_blank">
          <img class="${styles.circletokens}" id="${styles.circletoken6}" alt="Cybersecurity Training" src="${require('./assets/Directory.png')}"/></a>
        
          <a href="https://normalil.sharepoint.com/" title="The Landing" target="_blank">
          <img class="${styles.circletokens}" id="${styles.circletoken7}" alt="Cybersecurity Training" src="${require('./assets/landing.png')}"/></a>
        
          <img class="${styles.circletokens}" id="${styles.circletoken8}" alt="intwanet" src="${require('./assets/intranet.png')}"/>
        
          <!-- End circle tokens -->

        <img alt="tree" id="${styles.tree}" src="${require('./assets/tree.png')}">

        <!--These three iframes load the videos for the three video nodes, which get toggled on and off in the javascript later-->
        <iframe width="1280" height="720" id="${styles.embeddedvideo0}" src="https://web.microsoftstream.com/embed/video/790449df-776d-4b84-8df8-5750c1c4eabe?autoplay=true&showinfo=false" 
        allowfullscreen>
        </iframe>

        <iframe width="1280" height="720" id="${styles.embeddedvideo1}" src="https://web.microsoftstream.com/embed/video/45ddeae8-4f9b-4ab5-98bb-63182329bdb9?autoplay=true&showinfo=false" 
        allowfullscreen>
        </iframe>

        <iframe width="1280" height="720" id="${styles.embeddedvideo2}" src="https://web.microsoftstream.com/embed/video/7f37778e-bfb3-4707-959a-1769f6fc4bb9?autoplay=true&showinfo=false" 
        allowfullscreen>
        </iframe>
      </div>
        <h2>Welcome, ${escape(this.context.pageContext.user.displayName)}!</h2>
        <div>Follow the circle to arrive at Uptown Station from the Trail!</div>
      </div>
    </section>
    `;

    this.videoListenerSetup();
 
/*
  interface StreamPlayer {
  pause: () => void;
  // Add other methods or properties if needed
}

interface CustomWindow extends Window {
  amp: StreamPlayer;
}

const backgroundImage = document.querySelector(`#${styles.circleimage}`) as HTMLImageElement;
backgroundImage.addEventListener('click', () => {
  // Disable any active embedded videos
  embeddedVideo0.style.display = 'none';
  embeddedVideo1.style.display = 'none';
  embeddedVideo2.style.display = 'none';

  // Pause any currently playing videos
  const iframeWindow0 = embeddedVideo0.contentWindow as CustomWindow;
  // Access the player object inside the iframe
  const player = iframeWindow0.amp;

  // Pause the video using the Stream Player API
  if (player) {
    player.pause();
    console.log("SHOULD HAVE PAUSED!");
  }
});
*/
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
