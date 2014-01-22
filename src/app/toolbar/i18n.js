angular.module('flacky.toolbar.i18n',['pascalprecht.translate']).config(function($translateProvider) {
  $translateProvider.translations('ru', {
    'SHOW_SPACING':'Показывать отступы',
    'SHOW_BORDERS':'Показывать границы',
    'SHOW_CAPTIONS':'Показывать метки',
    'ADD_BLOCK':'Добавить блок',
    'ADD_COMPONENT':'Добавить компонент',
    'GENERATE':'Генерировать',
    'ADD':'Добавить',
    'CANCEL':'Отмена'
  });
  $translateProvider.preferredLanguage('ru');
});