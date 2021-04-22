module.exports = {
  name: 'features-todos',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/features/todos',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
