import React, { useState } from 'react';
import styled from 'styled-components';

const Tabs = () => {
    const TabsBox = styled.div`
        ul {
            display: flex;
            justify-content: flex-end;
            list-style:none;
            border: solid 2px red;
            padding: 0;
            li {
                margin-left: 1rem;
            }
        }
    `

    interface tabProvider {
        name: string,
        id: string,
    }


    const [tabs, setTabs] = React.useState<tabProvider[]>([
        {
            name: "현재 상영중인 영화",
            id: "current"
        },
        {
            name: "영화목록",
            id: "movieList"
        },
        {
            name: "배우목록",
            id: "actorList"
        }
    ])
    return (
        <TabsBox>
            <ul>
                {tabs.map((v, i) =>
                    <li>{v.name}</li>
                )}
            </ul>
        </TabsBox>
    );
};

export default Tabs;