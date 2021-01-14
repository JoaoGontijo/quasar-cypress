<template>
  <q-page class="flex flex-center">
    <q-form class="q-gutter-md">
      <div class="text-h6">Cadastro</div>
      <q-input v-model="nome" data-cy="nome" type="text" label="Nome" />
      <q-input v-model="sobrenome" data-cy="sobrenome" type="text" label="Sobrenome" />
      <q-input v-model="idade" data-cy="idade" type="text" label="Nome" />
      <div>
        <q-btn data-cy="btn-cadastrar" label="Cadastrar" type="submit" color="primary"/>
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      nome: null,
      sobrenome: null,
      idade: null
    }
  }
}
</script>
