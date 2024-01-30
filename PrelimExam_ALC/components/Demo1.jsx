import React from 'react';

const ThingstoBring = ({ item, status }) => {
const backgroundColor = status === 'on-hand' ? 'pink' : 
                        status === 'true' ? 'green' : '';

return (
    <li style={{ fontFamily: "timesNewRoman" , fontSize: '20px', backgroundColor, listStyleType: 'none', padding: '8%', margin: '3%'  }}>
    {item}
    </li>
);
};

const ListofItems = ({ list, listStatus }) => {
return (
<ul>
{list.map((item, index) => 
(
<ThingstoBring key={index} item={item} 
                status={listStatus[index]} />
))}
</ul>
);
};

const Result = () => {
const myList = ['My Strawhat', 
                'Gum gum Fruit', 
                'The Red Vest'];
const myStatusList = ['true', 
                    'on-hand', 
                    'true'];

return (
<div>
<h1>Things to Bring</h1>
<ListofItems list={myList} listStatus={myStatusList} />
</div>
);
};

export default Result;