import React, { Fragment, useState } from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { TextButton, ContainedButton } from './buttons';
import { Container, FloatContainer } from './layout';
import { Title } from './typography';
import styled from 'styled-components/native';

export const ModalContainer = styled(Container)`
  background-color: #FFF;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  background-color: #FFF;
  width: 100%;
  margin-bottom: 20px;
  height: 45px;
  font-size: 16px;
  border-width: 1px;
  border-color: #C9C9C9;
  paddingHorizontal: 10px;
`;

const FormContainer = styled.View`
  width: 100%;
  paddingHorizontal: 15px;
  align-items: flex-end;
`;

const AddCurrencyModal = ({ requestCurrency, isLoading }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  const onAdd = () => {
    requestCurrency(value);
    setValue('');
    closeModal();
  }

  return (
    <Fragment>
      {isLoading ? <ActivityIndicator size="large"  color="#385774" /> : <TextButton onPress={openModal} label="+ Add a Cryptocurrency"/>}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <ModalContainer>
          <FormContainer>
            <Title customStyle={{ alignSelf: "flex-start" }} >Add a Cryptocurrency</Title>
            <Input value={value} onChangeText={setValue} sunderlineColorAndroid="transparent" placeholder={"Use name or a ticker symbol..."}/>
            <ContainedButton onPress={onAdd} color="#000" label="Add" bgColor="yellow" />
          </FormContainer>
          <FloatContainer>
            <TextButton onPress={closeModal} label="<  Back to the list" />
          </FloatContainer>
        </ModalContainer>
      </Modal>
    </Fragment>
  );
}

export default AddCurrencyModal;
