<template>
    <div class="usuarioInicio">
        <div class="containerSearch">
            <h1 class="tituloHome">Github <span class="tituloSearch">Search</span></h1>
            <div>
                <input class="pesquisaHome" type="text" placeholder="Nome de Usuário" v-model="nomeUsuario">
                <button class="botaoPesquisa" @click="buscarUsuario">Buscar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nomeUsuario: '',
        }
    },
    methods: {
        buscarUsuario(){

        }
    }
}
</script>

<style>
    /* PRINCIPAL */
    .usuarioInicio {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .containerSearch {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
    }

    .tituloHome {
        font-size:4rem ;
        font-weight: 700;
        font-style: italic;
    }

    .tituloSearch {
        font-weight: 500;
    }
    /* PESQUISA */
    .pesquisaHome {
        width: 600px;
        height: 40px;
        border: solid 2px rgba(0, 0, 0, 0.7);
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    
    .botaoPesquisa {
        background: rgba(0, 0, 0, 0.7);
        padding: 12px;
        border: none;
    }

</style>