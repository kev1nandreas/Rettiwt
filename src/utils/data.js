import { FaUserFriends } from "react-icons/fa";
import { MdOutlineRssFeed } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { MdOutlineBookmark } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineHelp } from "react-icons/md";

export const menuItems = [
  {
    menu: "Feed",
    icon: MdOutlineRssFeed,
    redirect: "/",
  },
  {
    menu: "Friends",
    icon: FaUserFriends,
    redirect: "/",
  },
  {
    menu: "Events",
    icon: MdEvent,
    redirect: "/",
  },
  {
    menu: "Saved",
    icon: MdOutlineBookmark,
    redirect: "/saved",
  },
  {
    menu: "Settings",
    icon: MdOutlineSettings,
    redirect: "/"
  },
  {
    menu: "Help",
    icon: MdOutlineHelp,
    redirect: "/"
  },
];
