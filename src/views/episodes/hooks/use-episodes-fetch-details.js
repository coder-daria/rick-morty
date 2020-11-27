import { useEffect, useMemo, useState } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';

import {
  GET_EPISODES,
  GET_EPISODE_BY_ID,
} from '../../../apollo/queries/episodes';

import { selectedListItemVar } from '../../../apollo/cache';

import EpisodesModel from '../model/EpisodesModel';

const useEpisodesFetchDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, toggleDrawer] = useState(false);

  const selectedItemId = useReactiveVar(selectedListItemVar);

  const { data, loading, fetchMore, error } = useQuery(GET_EPISODES, {
    notifyOnNetworkStatusChange: true,
    variables: {
      page: currentPage,
    },
  });

  const { data: { episode } = {} } = useQuery(GET_EPISODE_BY_ID, {
    skip: !isDrawerOpen,
    variables: {
      id: selectedItemId,
    },
  });

  useEffect(() => {
    fetchMore(GET_EPISODES, {
      variables: {
        page: currentPage,
      },
    });
  }, [fetchMore, currentPage]);

  const { pageInfo, episodes } = useMemo(() => EpisodesModel(data), [data]);

  return {
    episode,
    episodes,
    isDrawerOpen,
    error,
    loading,
    pageInfo,
    setCurrentPage,
    toggleDrawer,
  };
};

export default useEpisodesFetchDetails;
