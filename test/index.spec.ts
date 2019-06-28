
import regexCombineOr from '../src/index';
import {expect} from 'chai';

describe('Regex Combine Or', ()=>{

  it('Should return combined regex with or operators', () => {
    expect(regexCombineOr(/node_modules/, /bower_components/).toString()).to.be.equal(/(node_modules)|(bower_components)/.toString());
  });


})