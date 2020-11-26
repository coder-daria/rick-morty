import React from 'react';

import { Drawer, PageLayout } from '../../components';
import EpisodeDetails from './episode-details/EpisodeDetails';
import useEpisodesFetchDetails from './hooks/use-episodes-fetch-details';

import { EPISODES_TABLE_COLUMN } from './constants';

const DRAWER_TITLE = 'Episode Details';

function Episodes() {
  const {
    episode,
    episodes,
    error,
    isDrawerOpen,
    loading,
    pageInfo,
    setCurrentPage,
    toggleDrawer,
  } = useEpisodesFetchDetails();

  return (
    <div>
      <PageLayout
        columns={EPISODES_TABLE_COLUMN}
        error={error}
        loading={loading}
        pageInfo={pageInfo}
        setCurrentPage={setCurrentPage}
        tableData={episodes}
        toggleDrawer={toggleDrawer}
      />
      {isDrawerOpen && episode && (
        <Drawer
          isDrawerOpen={isDrawerOpen}
          onClose={toggleDrawer}
          title={DRAWER_TITLE}
        >
          <EpisodeDetails episode={episode} />
        </Drawer>
      )}
    </div>
  );
}

export default Episodes;
