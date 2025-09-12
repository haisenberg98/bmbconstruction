import React from 'react';

import MenuContent from '@/app/(frontend)/components/MenuContent';
import MenuTrigger from '@/app/(frontend)/components/MenuTrigger';

const Menu = () => {
    return (
        <div className='menu-wrapper'>
            {/* menu trigger */}
            <MenuTrigger />
            {/* menu content */}
        </div>
    );
};

export default Menu;
