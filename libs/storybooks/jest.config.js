module.exports = {
  name: 'storybooks',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/storybooks',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
