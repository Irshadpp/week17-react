# week17-react


# Testing set up:
 -Install React testing library
 -install jest
 -Install babel dependencies
 -configure babel.config
 -configure parcel config file to disable default bable transpilation (.parcelrc)
 -configure jest (npx jest --init)
 -Install jest-dom library
 -Install @babel/preset-react    to make JSX work in test cases
 -Include @bablel/preset-react inside babel config =====> ["@babel/preset-react", {runtime:"automatic"}]
 -Install @testing-library/jest-dom

 -"watch-test": "jest --watch" ===> add to json so avoid to (npm run test) and do (npm run watch test) just once
