import React from "react";
import Image from "next/image";

import imgs from "@/assets";
import Style from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_image}>
          <Image src={imgs.image2} alt="user image" width={50} height={50} />
        </div>
        <div className={Style.notification_box_image_info}>
          <h4>Kamou Legacy</h4>
          <p>Measure action your user ...</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
