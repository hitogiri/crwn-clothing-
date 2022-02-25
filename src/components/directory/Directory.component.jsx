import React from 'react';
import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/MenuItem.component';

import './directory.style.scss';

const Directory = ({sections}) => (
   <div className='directory-menu'>
     {
       sections.map(({imageUrl, id, ...otherSectionProps}) => (
         <MenuItem key={id} image={imageUrl} {...otherSectionProps} />
       ))
     }
   </div>
 );

 const mapStateToProps = createStructuredSelector({
   sections: selectDirectorySections
 });

export default connect(mapStateToProps)(Directory);
