import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
// import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionOverview =({collections}) => (
    <div className='collections-overview'>
        {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />))
        }
    </div>
);

// const mapStateToProps = createStructuredSelector({
//     collection: selectCollections
//   });

const mapStateToProps = state => ({
    collections: state.shop.collections
});
  
  export default connect(mapStateToProps)(CollectionOverview);
  