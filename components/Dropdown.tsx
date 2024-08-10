"use client";
import { ChevronDown } from 'lucide-react';
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';


interface Props {
    currentItem: any;
    items: any[];
    setCurrentItem: (item: any) => void;
}

function Dropdown({ currentItem, setCurrentItem, items }: Props) {
    const [showDropdown, setShowDropdown] = React.useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const handleItemChange = (item: any) => {
        setCurrentItem(item);
        setShowDropdown(false);
    }

    return (
        <div>
            <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
                <div onClick={toggleDropdown} className='title-dropdown capitalize'>
                    {currentItem.name || <div className='w-5 h-5 mr-2 rounded-full' style={{ background: currentItem.color }}></div>}
                    <ChevronDown />
                </div>
                {showDropdown && (
                    <div className='dropdown-menu'>
                        {items.map((item, index) => (
                            <div key={index} className='dropdown-item flex items-center capitalize text-sm font-medium' onClick={() => handleItemChange(item)}>
                                {item.icon && <img src={item.icon} alt={item.name} className='w-5 h-5 mr-2' />}
                                {item.color && <div className='w-5 h-5 mr-2 rounded-full' style={{ background: item.color }}></div>}
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
            </OutsideClickHandler>
        </div>
    )
}

export default Dropdown
