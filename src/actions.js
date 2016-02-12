import Reflux from 'reflux';

export let DeckActions = Reflux.createActions([
  'createDeck',
  'deleteDeck',
  'reviewDeck',
  'deleteAllDecks'
]);

export var CardActions = Reflux.createActions([
  'createCard',
  'deleteCard',
  'review',
  'editCard',
  'deleteAllCards'
]);
