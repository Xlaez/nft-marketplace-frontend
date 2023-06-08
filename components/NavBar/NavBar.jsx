import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./NavBar.module.css";
import { Discover, Help, Notification, Profile, SideBar } from ".";
import { Button } from "..";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import imgs from "../../assets";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notificication, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setOpenSideMenu(false);
      setProfile(false);
    } else if (btnText === "Help") {
      setHelp(true);
      setDiscover(false);
      setNotification(false);
      setOpenSideMenu(false);
      setProfile(false);
    }
  };

  const openNotificationMenu = () => {
    if (!notificication) {
      setNotification(true);
      setOpenSideMenu(false);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfileMenu = () => {
    if (!profile) {
      setProfile(true);
      setNotification(false);
      setOpenSideMenu(false);
      setDiscover(false);
      setHelp(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideBar) {
      setOpenSideMenu(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* LEFT NAVABAR SECTION */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={imgs.logo} alt="app logo" width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search For NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* RIGHT NAVBAR SECTION */}
        <div className={Style.navbar_container_right}>
          {/* DDISCOVER MENU  */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* HELP MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <Help />
              </div>
            )}
          </div>
          {/* NOTIFICATION MENU */}
          <div className={Style.navbar_container_right_notification}>
            <MdNotifications
              className={Style.notificication}
              onClick={() => openNotificationMenu()}
            />
            {notificication && <Notification />}
          </div>
          {/* CREATE BUTOON SECTION */}
          <div className={Style.navbar_container_right_button}>
            <Button btnText="Create" />
          </div>
          {/* PROFILE MENU */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={imgs.image2}
                alt="User profile"
                width={40}
                height={40}
                onClick={() => openProfileMenu()}
              />
            </div>
            {profile && <Profile />}
          </div>
          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.MenuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>
      {/* SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.SideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
