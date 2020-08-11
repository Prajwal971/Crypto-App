import React, { PureComponent } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, FloatContainer } from '../components/layout';
import { removeCurrencies, requestCurrency, toggleRemoveMode, selectCurrencyToRemove, unselectCurrencyToRemove } from '../store/actions';
import Header from '../components/Header';
import CurrencyItem from '../components/CurrencyItem';
import AddCurrencyModal from '../components/AddCurrencyModal';
import { ContainedButton } from '../components/buttons';

class Currencies extends PureComponent {

  _onTouchCheckbox = (id) => () => {
    const { currenciesToRemove } = this.props;
    const currencyIndex = currenciesToRemove.findIndex(crrId => crrId === id);
    
    if (currencyIndex === -1) {
      this.props.selectCurrencyToRemove(id);
    } else {
      this.props.unselectCurrencyToRemove(id);
    }
  }

  renderCurrencies = () => {
    return this.props.currencies.map((item) => (
      <CurrencyItem
        key={item.id}
        symbol={item.symbol}
        value={item.value}
        name={item.name}
        percentage={item.percentage}
        toggleRemoveMode={this.props.toggleRemoveMode}
        removeMode={this.props.removeMode}
        onTouchCheckbox={this._onTouchCheckbox(item.id)}
      />
    ));
  }

  onRemoveActionDispatched = () => {
    this.props.removeCurrencies();
    this.props.toggleRemoveMode();
  }

  render() {
    return (
      <Container>
        <Header />
        {this.renderCurrencies()}
        {this.props.removeMode ?
          <FloatContainer>
            <ContainedButton onPress={this.onRemoveActionDispatched} color="#000" label="Remove" bgColor="yellow" />
          </FloatContainer>
          :
          <AddCurrencyModal
            isLoading={this.props.loading}
            requestCurrency={this.props.requestCurrency}
          />
        }
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    ...ownProps,
    currencies: state.currencies,
    removeMode: state.removeMode,
    loading: state.loading,
    currenciesToRemove: state.currenciesToRemove
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators({ removeCurrencies, requestCurrency, toggleRemoveMode, selectCurrencyToRemove, unselectCurrencyToRemove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
