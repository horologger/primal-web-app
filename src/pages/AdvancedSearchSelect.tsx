import { Select, TextField } from '@kobalte/core';
import { A } from '@solidjs/router';
import { Component, createEffect, For, onMount } from 'solid-js';
import { createStore } from 'solid-js/store';
import { style } from 'solid-js/web';
import Avatar from '../components/Avatar/Avatar';
import ButtonPrimary from '../components/Buttons/ButtonPrimary';
import PageCaption from '../components/PageCaption/PageCaption';
import PageTitle from '../components/PageTitle/PageTitle';
import Search from '../components/Search/Search';
import SearchUsers from '../components/Search/SearchUsers';
import StickySidebar from '../components/StickySidebar/StickySidebar';
import TextInput from '../components/TextInput/TextInput';
import Wormhole from '../components/Wormhole/Wormhole';
import { userName } from '../stores/profile';
import { PrimalUser } from '../types/primal';
import styles from './FeedsTest.module.scss';


const AdvancedSearchSelectBox: Component<{
  value: string
  options: string[],
  onChange: (selection: string) => void,
}> = (props) => {


  return (
    <Select.Root
      class={styles.selectBox}
      value={props.value}
      options={props.options}
      onChange={props.onChange}
      itemComponent={props => (
        <Select.Item class={styles.selectItem} item={props.item}>
          <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
        </Select.Item>
      )}
    >
      <Select.Label />
      <Select.Trigger class={styles.trigger}>
        <Select.Value<string>>
          {s => s.selectedOption()}
        </Select.Value>
      </Select.Trigger>
      <Select.Description />
      <Select.ErrorMessage />
      <Select.Portal>
        <Select.Content>
          <Select.Listbox class={styles.selectContent} />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

export default AdvancedSearchSelectBox;
