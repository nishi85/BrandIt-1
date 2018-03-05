import React from "react";

import H2Text from "./H2Text";

class MyBrands extends React.Component {
    render() {
        return (
            <div className="myBrands-container">
                <div className="myBrands">
                    <H2Text className={'mainFont'} text={'My Saved Brands'} />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sequi ipsa quibusdam corrupti, unde a, nesciunt provident illo laborum maiores fuga officiis cum rerum maxime officia aperiam, qui inventore. Voluptates?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sequi ipsa quibusdam corrupti, unde a, nesciunt provident illo laborum maiores fuga officiis cum rerum maxime officia aperiam, qui inventore. Voluptates?</p>
                </div>
            </div>
        )
    }
}

export default MyBrands;
