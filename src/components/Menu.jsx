import React, { useState } from 'react'
import './Style.css'
import { AiOutlineHome, AiOutlineMessage, AiOutlineCamera, AiOutlineSetting } from 'react-icons/ai'
import { HiOutlineUser } from 'react-icons/hi'
import { Flexdiv, Icon, Indicator, Name, Navigation, NavigationItem } from './MenuStyle'


const Menu = () => {
    const items = [
        { icon: <AiOutlineHome />, name: "Home", site: "0px",color:'red' },
        { icon: <HiOutlineUser />, name: "Profile", site: "60px",color:'orange' },
        { icon: <AiOutlineMessage />, name: "Message", site: "120px",color:'yellow' },
        { icon: <AiOutlineCamera />, name: "Photo", site: "180px",color:'green' },
        { icon: <AiOutlineSetting />, name: "Settings", site: "240px",color:'blue' },
    ]

    const [indicatorIndex, setIndicatorIndex] = useState(0)

    return (

        <Navigation>
            <Flexdiv>
                <Indicator site={items[indicatorIndex].site} bg={items[indicatorIndex].color}/>
                {items.map((item, index) => (
                    <NavigationItem key={index}>
                        <Icon onClick={() => setIndicatorIndex(index)} style={indicatorIndex === index ? {transform: "translateY(-50%)"} : {transform: "translateY(40%)"}}> {item.icon}</Icon>
                        <Name style={indicatorIndex === index ? {transform: "translateY(0)",opacity:"1"} : {transform: "translateY(-10px)",opacity:"0"}}> {item.name}</Name>
                        {/* <span className={indicatorIndex === index ? "icon active" : "icon"} onClick={() => setIndicatorIndex(index)}> {item.icon}</span>
                            <span className={indicatorIndex === index ? "name active" : "name"}> {item.name}</span> */}
                    </NavigationItem>
                ))}
            </Flexdiv>
        </Navigation>
    )
}

export default Menu