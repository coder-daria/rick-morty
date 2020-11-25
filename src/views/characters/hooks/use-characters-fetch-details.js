import { useMemo, useState, useEffect } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';

import { GET_CHARACTERS, GET_CHARACTER_BY_ID } from '../../../apollo/queries';

import CharactersModel from '../model/CharactersModel';
import { isDrawerOpenVar, selectedListItemVar } from '../../../apollo/cache';

const useCharactersFetchDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const selectedItemId = useReactiveVar(selectedListItemVar);
  const isDrawerOpen = useReactiveVar(isDrawerOpenVar);

  const { data, loading, fetchMore, error } = useQuery(GET_CHARACTERS, {
    fetchPolicy: 'cache-first',
    variables: {
      page: currentPage,
    },
  });

  const { data: { character } = {} } = useQuery(GET_CHARACTER_BY_ID, {
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

  const { pageInfo, characters } = useMemo(() => CharactersModel(data), [data]);

  return {
    error,
    pageInfo,
    characters,
    setCurrentPage,
    loading,
    isDrawerOpen,
    character,
    currentPage,
  };
};

export default useCharactersFetchDetails;
