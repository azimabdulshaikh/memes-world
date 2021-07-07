import {
    EmailShareButton,
    FacebookShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    FacebookMessengerShareButton
  } from "react-share";
  
  import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    OKIcon,
    PinterestIcon,
    GooglePlusIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";
  import React from 'react';
  import { Grid, GridColumn, Image } from 'semantic-ui-react';
  import   './ShareModal.css';
  
    const title = `${document.title} | Advanced Dontpad`;
    const url = window.location.href;
    const iconSize = 48;
  
  const shareModal = () => (
    <Grid divided='vertically'>
      <Grid.Row columns={4}>
        <Grid.Column>
        <WhatsappShareButton url={url} title={title} className="share-button">
          <WhatsappIcon size={iconSize} square />
          WhatsApp
        </WhatsappShareButton>
        </Grid.Column>
        <Grid.Column>
        <WorkplaceShareButton url={url} title={title} className="share-button">
          <WorkplaceIcon size={iconSize} square />
            WorkPlace
        </WorkplaceShareButton>
        </Grid.Column>
        <Grid.Column>
        <EmailShareButton url={url} title={title} className="share-button">
          <EmailIcon size={iconSize} square />
          Email
        </EmailShareButton>
        </Grid.Column>
        <Grid.Column>
        <FacebookMessengerShareButton url={url} title={title} className="share-button">
          <FacebookMessengerIcon size={iconSize} square />
          Chats
        </FacebookMessengerShareButton>
        </Grid.Column>
      </Grid.Row>
  
      <Grid.Row columns={4}>
        <Grid.Column>
        <LineShareButton url={url} title={title} className="share-button">
          <LineIcon size={iconSize} square />
          Line
        </LineShareButton>
        </Grid.Column>
        <Grid.Column>
        <TwitterShareButton url={url} title={title} className="share-button">
          <TwitterIcon size={iconSize} square />
          Twitter
        </TwitterShareButton>
        </Grid.Column>
        <Grid.Column>
        <FacebookShareButton url={url} quote={title} className="share-button">
          <FacebookIcon size={iconSize} square />
          News Feed
        </FacebookShareButton>
        </Grid.Column>
        <GridColumn>
        <LinkedinShareButton url={url} title={title} className="share-button">
          <LinkedinIcon size={iconSize} square />
          Linkedin
        </LinkedinShareButton>
        </GridColumn>
      </Grid.Row>
    </Grid>
  )
  
  
  
  
  export default shareModal