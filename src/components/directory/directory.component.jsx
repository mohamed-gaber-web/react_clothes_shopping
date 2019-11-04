import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import { connect } from 'react-redux';

import "./directory.styles.scss";

const Directory = ({ sections }) =>  {
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    );
}

const mapStateToProps = state => {
  return {
    sections: state.directory.sections
  }
}

export default connect(mapStateToProps)(Directory);
