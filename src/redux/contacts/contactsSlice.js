import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDelContact,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchAllContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchAllContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAddContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(fetchAddContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchDelContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDelContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          item => item.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(fetchDelContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const contactsReduser = contactsSlice.reducer;
