import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { FcBusinessman,FcVoicePresentation} from "react-icons/fc";
import { SiMicrosoftteams } from "react-icons/si";

export const Sidebardata = [
  {
    title: 'BOOKS',
    path: '/Books',
    
    icon:<IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },
  
  {
    title: 'CREATECLIENT',
    path: '/Client',
    icon: <FcBusinessman/>
  },
  {
    title: 'CUSTOMER',
    path: '/addcustumer',
    icon:<FcVoicePresentation/>
    // <FaIcons.FaCartPlus />
  },
  {
    title: 'TEAM',
    path: '/addteam',
    icon: <IoIcons.IoMdPeople />
    // <SiMicrosoftteams/>
  }, {
    title: 'ORDERS',
    path: 'addorder',
    icon:  <SiMicrosoftteams/>
  },
  {
    title: 'CREATE ORDER',
    path: '/createorder',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },
  
];