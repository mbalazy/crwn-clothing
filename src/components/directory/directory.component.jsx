import React, { Component } from 'react';
import './directory.style.scss';
import MenuItem from '../../components/menu-item/menu-item.component';
import SECTIONS_DATA from './sections.data';

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
