var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.
  // Should return an object with type equal to CHANGE_VIDEO
   return {
    type: 'CHANGE_VIDEO',
    video: video
  };
};

export default changeVideo;
