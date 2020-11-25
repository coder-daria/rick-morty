import React from 'react';

import { Drawer, PageLayout } from '../../components';
import useEpisodesFetchDetails from './hooks/use-episodes-fetch-details';

import EpisodeDetails from './episode-details/EpisodeDetails';
import { EPISODES_TABLE_COLUMN } from './constants';

const DRAWER_TITLE = 'Episode Details';
const VIEW_TITLE = 'episodes';

function Episodes() {
  const {
    currentPage,
    episode,
    episodes,
    error,
    isDrawerOpen,
    loading,
    pageInfo,
    setCurrentPage,
  } = useEpisodesFetchDetails();

  return (
    <div>
      <PageLayout
        title={VIEW_TITLE}
        columns={EPISODES_TABLE_COLUMN}
        currentPage={currentPage}
        error={error}
        loading={loading}
        pageInfo={pageInfo}
        setCurrentPage={setCurrentPage}
        tableData={episodes}
      />
      {isDrawerOpen === VIEW_TITLE && episode && (
        <Drawer title={DRAWER_TITLE}>
          <EpisodeDetails episode={episode} />
        </Drawer>
      )}
    </div>
  );
}

export default Episodes;
