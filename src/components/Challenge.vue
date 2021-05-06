<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card" style="margin-top:29px;">
            <h4
              class="text-success"
              style="margin-left: 14px;
                     margin-bottom: -20px;"
            >
              Reservar
            </h4>
            <div class="card-body">
              <form v-on:submit="agregarTareas">
                <input
                  type="text"
                  class=""
                  v-model="usuarios.nombre"
                  placeholder="Nombre"
                  style="margin-right: 100px;"
                />

                <input
                  type="date"
                  class=""
                  placeholder="Fecha"
                  style="margin-right: 110px;"
                />
                <input
                  type="time"
                  v-model="usuarios.desde"
                  class=""
                  placeholder="desde"
                />
                <input
                  type="time"
                  v-model="usuarios.hasta"
                  class=""
                  placeholder="hasta"
                  style="margin-left:71px"
                />
                <button>
                  <v-btn
                    dark
                    color="#4CAF50"
                    style="margin-bottom: 10px;
                         margin-left: 87px;"
                    >Guardar
                  </v-btn>
                </button>
              </form>
            </div>
          </div>

          <div>
            <h3 class="text-secondary">Agenda de Reservas</h3>
            <div id="app">
              <vue-timeline :data="events"></vue-timeline>
            </div>
          </div>
        </div>

        <!--fin columna-->

        <div class="col-md-12">
          <table class="table" style="margin-top: 61px;">
            <thead>
              <tr>
                <th class="text-secondary">Nombre</th>
                <th class="text-secondary">Horario</th>
                <th class="text-secondary">Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(useres, index) in users" v-bind:key="index">
                <td>{{ useres.nombre }}</td>
                <td class="text-dark">
                  De{{ useres.desde }} {{ useres.hasta }}
                </td>
                <td>
                  <button color="primary" depressed>
                    <v-icon small v-on:click="eliminarTarea(useres)"
                      >mdi-delete</v-icon
                    >
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTimeline from "vue-timeline-component";

export default {
  name: "App",
  components: {
    VueTimeline,
  },
  data() {
    return {
      events: [
        {
          name: "Reserva 1",
          start: new Date(2020, 1, 1),
          end: new Date(2020, 1, 4),
        },
        {
          name: "Reserva 2",
          start: new Date(2020, 1, 2),
          end: new Date(2020, 1, 5),
        },
        {
          name: "Reserva 3",
          start: new Date(2020, 1, 3),
          end: new Date(2020, 1, 10),
        },
      ],
      users: [
        {
          nombre: "Alvarado, Eduardo Alfonso",
          desde: " 9 a 13",
        },
        {
          nombre: "Acuña Lopez,Juliana",
          desde: "9 a 13",
        },
        {
          nombre: "Arenales Ingrid",
          desde: "9 a 13",
        },
      ],

      usuarios: {},
    };
  },
  methods: {
    agregarTareas: function(e) {
      e.preventDefault();
      this.users.push(this.usuarios); // lo que tenga el arrays USUARIOS insertalo en el json
      this.usuarios = {}; //reinicia el input
    },
    eliminarTarea: function(usu) {
      this.users.splice(usu, 1); // lo que tenga el json elimina el usuario que se haga click
    },
  },
};
</script>

<style></style>
