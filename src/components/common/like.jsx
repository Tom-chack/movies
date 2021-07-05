import React from "react";

//Input liked: boolen
//Output: onClick

const Like = (props) => {
  let classes = "clickable fa fa-heart";
  if (!props.liked) classes += "-o";
  return <i onClick={props.onClickLike} className={classes}></i>;
};

export default Like;
