import { useMemo, useState, useEffect } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';

import { GRAPHQL_FETCH_POLICY } from '../../../common/constants/graphql';

import {
  GET_CHARACTERS,
  GET_CHARACTER_BY_ID,
} from '../../../apollo/queries/characters';
import { selectedListItemVar } from '../../../apollo/cache';

import CharactersModel from '../model/CharactersModel';

const { CACHE_FIRST, CACHE_ONLY } = GRAPHQL_FETCH_POLICY;

const useCharactersFetchDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, toggleDrawer] = useState(false);

  const selectedItemId = useReactiveVar(selectedListItemVar);

  const { data, loading, fetchMore, error } = useQuery(GET_CHARACTERS, {
    fetchPolicy: CACHE_FIRST,
    notifyOnNetworkStatusChange: true,
    variables: {
      page: currentPage,
    },
  });

  const { data: { character } = {} } = useQuery(GET_CHARACTER_BY_ID, {
    fetchPolicy: !isDrawerOpen ? CACHE_ONLY : CACHE_FIRST,
    variables: {
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

  const { pageInfo, characters } = useMemo(() => CharactersModel(data), [data]);

  return {
    character,
    characters,
    error,
    isDrawerOpen,
    loading,
    pageInfo,
    setCurrentPage,
    toggleDrawer,
  };
};

export default useCharactersFetchDetails;
