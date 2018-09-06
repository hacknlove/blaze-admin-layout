import { Template } from 'meteor/templating'

Template.hnlAdminLayout.events({
  'click .hnl-derecha button.colapsar' (event, template) {
    template.$('.hnl-principal').toggleClass('derechaColapsada')
  },
  'click .hnl-izquierda button.colapsar' (event, template) {
    template.$('.hnl-principal').toggleClass('izquierdaColapsada')
  }
})

Template.hnlAdminLayout.helpers({
  sinDerecha () {
    return Template.currentData().derechaTemplate ? '' : 'derechaColapsada'
  },
  sinIzquierda () {
    return Template.currentData().izquierdaTemplate ? '' : 'izquierdaColapsada'
  }
})
