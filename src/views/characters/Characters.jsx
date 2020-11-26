import React from 'react';

import { Drawer, Error, PageLayout } from '../../components';
import CharacterDetails from './character-details/CharacterDetails';
import useCharactersFetchDetails from './hooks/use-characters-fetch-details';

import { DRAWER_TITLE, CHARACTERS_TABLE_COLUMN } from './constants';

function Characters() {
  const {
    character,
    characters,
    error,
    isDrawerOpen,
    loading,
    pageInfo,
    setCurrentPage,
    toggleDrawer,
  } = useCharactersFetchDetails();

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <PageLayout
        columns={CHARACTERS_TABLE_COLUMN}
        error={error}
        loading={loading}
        pageInfo={pageInfo}
        setCurrentPage={setCurrentPage}
        tableData={characters}
        toggleDrawer={toggleDrawer}
      />
      {isDrawerOpen && character && (
        <Drawer
          isDrawerOpen={isDrawerOpen}
          onClose={toggleDrawer}
          title={DRAWER_TITLE}
        >
          <CharacterDetails character={character} />
        </Drawer>
      )}
    </div>
  );
}

export default Characters;
