// import Vuex mapper
import {
  mapActions as mapActionsFunction,
  mapGetters as mapGettersFunction,
  mapMutations as mapMutationsFunction,
  mapState as mapStateFunction,
  createNamespacedHelpers as createNamespacedHelpersFunction,
} from 'vuex';

// additional mappers
import mapNestedStateFunction from './mapNestedState.js';

// Vuex
export const mapActions = mapActionsFunction;
export const mapGetters = mapGettersFunction;
export const mapMutations = mapMutationsFunction;
export const mapState = mapStateFunction;
export const createNamespacedHelpers = createNamespacedHelpersFunction;

// additional functions
export const mapNestedState = mapNestedStateFunction;