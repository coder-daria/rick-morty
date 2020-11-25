import { useMemo, useState, useEffect } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';

import { GET_EPISODES, GET_EPISODE_BY_ID } from '../../../apollo/queries';
import { isDrawerOpenVar, selectedListItemVar } from '../../../apollo/cache';

import EpisodesModel from '../model/EpisodesModel';

const useCharactersFetchDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const selectedItemId = useReactiveVar(selectedListItemVar);
  const isDrawerOpen = useReactiveVar(isDrawerOpenVar);

  const { data, loading, fetchMore } = useQuery(GET_EPISODES, {
    fetchPolicy: 'cache-first',
    variables: {
      page: currentPage,
    },
  });

  const { data: { episode } = {} } = useQuery(GET_EPISODE_BY_ID, {
    variables: {
      skip: !selectedItemId,
      id: selectedItemId,
    },
  });

  useEffect(() => {
    if (currentPage !== 1) {
      fetchMore({
        variables: {
          page: currentPage,
        },
      });
    }
  }, [fetchMore, currentPage]);

  const { pageInfo, episodes } = useMemo(() => EpisodesModel(data), [data]);

  return {
    episode,
    episodes,
    isDrawerOpen,
    loading,
    pageInfo,
    setCurrentPage,
  };
};

export default useCharactersFetchDetails;
