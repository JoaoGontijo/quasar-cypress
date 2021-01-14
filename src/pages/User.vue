<template>
  <q-page class="q-pa-xl">
      <q-field label="Nome" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ nome }}</div>
        </template>
      </q-field>
      <q-field label="Sobrenome" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ sobrenome }}</div>
        </template>
      </q-field>
      <q-field label="Idade" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ idade }}</div>
        </template>
      </q-field>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      nome: 'Joao',
      sobrenome: 'Gontijo',
      idade: '22'
    }
  },
  mounted () {
    const usuario = {
      nome: 'joao',
      sobrenome: 'gontijo',
      idade: '22',
      token: 'nodk12nondoiwn1d2io3nksnd12'
    }
    window.sessionStorage.setItem('usuario', JSON.stringify(usuario))
  }
}
</script>
