import React from 'react';

import { Drawer, PageLayout } from '../../components';
import LocationDetails from './location-details/LocationDetails';
import useLocationsFetchDetails from './hooks/use-locations-fetch-details';

import { LOCATIONS_TABLE_COLUMN } from './constants';

const DRAWER_TITLE = 'Location Details';

function Locations() {
  const {
    isDrawerOpen,
    loading,
    location,
    locations,
    pageInfo,
    setCurrentPage,
    toggleDrawer,
  } = useLocationsFetchDetails();

  return (
    <div>
      <PageLayout
        columns={LOCATIONS_TABLE_COLUMN}
        loading={loading}
        pageInfo={pageInfo}
        setCurrentPage={setCurrentPage}
        tableData={locations}
        toggleDrawer={toggleDrawer}
      />
      {isDrawerOpen && location && (
        <Drawer
          isDrawerOpen={isDrawerOpen}
          onClose={toggleDrawer}
          title={DRAWER_TITLE}
        >
          <LocationDetails location={location} />
        </Drawer>
      )}
    </div>
  );
}

export default Locations;
