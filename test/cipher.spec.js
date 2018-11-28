describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "Ñ" para "Ñ" con offset 1' , () => {
      assert.equal(cipher.encode(1,"Ñ"),"Ñ");
    });

    it('debería retornar " " para " " con offset 1' , () => {
      assert.equal(cipher.encode(1," ")," ");
    });

    it('debería retornar ";" para ";" con offset 33' , () => {
      assert.equal(cipher.encode(33,";"),";");
    });

    it('debería retornar "," para "," con offset 33' , () => {
      assert.equal(cipher.encode(33,","),",");
    });

    it('debería retornar "." para "." con offset 33' , () => {
      assert.equal(cipher.encode(33,"."),".");
    });

    it('debería retornar "¿" para "¿" con offset 33' , () => {
      assert.equal(cipher.encode(33,"¿"),"¿");
    });

    it('debería retornar "?" para "?" con offset 33' , () => {
      assert.equal(cipher.encode(33,"?"),"?");
    });

    it('debería retornar "Á" para "Á" con offset 33' , () => {
      assert.equal(cipher.encode(33,"Á"),"Á");
    });

    it('debería retornar "É" para "É" con offset 33' , () => {
      assert.equal(cipher.encode(33,"É"),"É");
    });

    it('debería retornar "Í" para "Í" con offset 33' , () => {
      assert.equal(cipher.encode(33,"Í"),"Í");
    });

    it('debería retornar "Ó" para "Ó" con offset 33' , () => {
      assert.equal(cipher.encode(33,"Ó"),"Ó");
    });

    it('debería retornar "Ú" para "Ú" con offset 33' , () => {
      assert.equal(cipher.encode(33,"Ú"),"Ú");
    });

    it('debería retornar "¡" para "¡" con offset 33' , () => {
      assert.equal(cipher.encode(33,"¡"),"¡");
    });

    it('debería retornar "!" para "!" con offset 33' , () => {
      assert.equal(cipher.encode(33,"!"),"!");
    });

    it('debería retornar "(" para "(" con offset 33' , () => {
      assert.equal(cipher.encode(33,"("),"(");
    });

    it('debería retornar ")" para ")" con offset 33' , () => {
      assert.equal(cipher.encode(33,")"),")");
    });

    it('debería retornar ":" para ":" con offset 33' , () => {
      assert.equal(cipher.encode(33,":"),":");
    });

    it('debería retornar "*" para "*" con offset 33' , () => {
      assert.equal(cipher.encode(33,"*"),"*");
    });

    it('debería retornar " " " para " " " con offset 33' , () => {
      assert.equal(cipher.encode(33,"\""),"\"");
    });

    it('debería retornar " " para botón enter con offset 33' , () => {
      assert.equal(cipher.encode(33," ")," ");
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "Ñ" para "Ñ" con offset 1' , () => {
      assert.equal(cipher.decode(1,"Ñ"),"Ñ");
    });

    it('debería retornar " " para " " con offset 1' , () => {
      assert.equal(cipher.decode(1," ")," ");
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33' , () => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "Ñ" para "Ñ" con offset 1' , () => {
      assert.equal(cipher.decode(1,"Ñ"),"Ñ");
    });

    it('debería retornar " " para " " con offset 1' , () => {
      assert.equal(cipher.decode(1," ")," ");
    });

    it('debería retornar ";" para ";" con offset 33' , () => {
      assert.equal(cipher.decode(33,";"),";");
    });

    it('debería retornar "," para "," con offset 33' , () => {
      assert.equal(cipher.decode(33,","),",");
    });

    it('debería retornar "." para "." con offset 33' , () => {
      assert.equal(cipher.decode(33,"."),".");
    });

    it('debería retornar "¿" para "¿" con offset 33' , () => {
      assert.equal(cipher.decode(33,"¿"),"¿");
    });

    it('debería retornar "?" para "?" con offset 33' , () => {
      assert.equal(cipher.decode(33,"?"),"?");
    });

    it('debería retornar "Á" para "Á" con offset 33' , () => {
      assert.equal(cipher.decode(33,"Á"),"Á");
    });

    it('debería retornar "É" para "É" con offset 33' , () => {
      assert.equal(cipher.decode(33,"É"),"É");
    });

    it('debería retornar "Í" para "Í" con offset 33' , () => {
      assert.equal(cipher.decode(33,"Í"),"Í");
    });

    it('debería retornar "Ó" para "Ó" con offset 33' , () => {
      assert.equal(cipher.decode(33,"Ó"),"Ó");
    });

    it('debería retornar "Ú" para "Ú" con offset 33' , () => {
      assert.equal(cipher.decode(33,"Ú"),"Ú");
    });

    it('debería retornar "¡" para "¡" con offset 33' , () => {
      assert.equal(cipher.decode(33,"¡"),"¡");
    });

    it('debería retornar "!" para "!" con offset 33' , () => {
      assert.equal(cipher.decode(33,"!"),"!");
    });

    it('debería retornar "(" para "(" con offset 33' , () => {
      assert.equal(cipher.decode(33,"("),"(");
    });

    it('debería retornar ")" para ")" con offset 33' , () => {
      assert.equal(cipher.decode(33,")"),")");
    });

    it('debería retornar ":" para ":" con offset 33' , () => {
      assert.equal(cipher.decode(33,":"),":");
    });

    it('debería retornar "*" para "*" con offset 33' , () => {
      assert.equal(cipher.decode(33,"*"),"*");
    });

    it('debería retornar " " " para " " " con offset 33' , () => {
      assert.equal(cipher.decode(33,"\""),"\"");
    });

    it('debería retornar " " para botón enter con offset 33' , () => {
      assert.equal(cipher.encode(33," ")," ");
    });
  });


});
