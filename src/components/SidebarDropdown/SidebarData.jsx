import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import CV_ESP from '../../media/CV_ESP.pdf'
import RESUME_ENG from '../../media/RESUME_ENG.pdf'

export const SidebarData = [
    {
        title: 'Resume',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'English',
                path: RESUME_ENG,
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Spanish',
                path: CV_ESP,
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            }
        ]
    }
];