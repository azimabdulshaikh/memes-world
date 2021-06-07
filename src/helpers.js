export const generateGuid = () =>{
    var nav = window.navigator;
    // console.log("nav",nav)
    var screen = window.screen;
    // console.log("screen",screen)
    var guid = nav.mimeTypes.length;
    // console.log("guid",guid)
    guid += nav.userAgent.replace(/\D+/g, '');
    guid += nav.plugins.length;
    guid += screen.height || '';
    guid += screen.width || '';
    guid += screen.pixelDepth || '';
    return guid;
}