import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

it('should renders without crashing', () => {
    const div = document.createElement('div');

    const mock =  {    
      id: '0103e005-b762-485f-8f7e-722019d4f302',
      source: 'REPORT',
      sourceIdentityId: '6750b4d5-4cb5-45f0-8b60-61be2072cce2',
      reference: {
        referenceId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
        referenceType: 'REPORT'
      },
      state: 'OPEN',
      payload: {
          source: 'REPORT',
          reportType: 'SPAM',
          message: null,
          reportId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
          referenceResourceId: 'a03411ce-0197-49a2-86d4-55e06aa52e79',
          referenceResourceType: 'REPLY'
      },
      created: '2017-10-02T16:09:04.258Z'
    }

    ReactDOM.render(
      <Item 
        key={ mock.id } 
        data={ mock }
        onBlockClick={ id => this.onBlock(id)}
        onResolveClick={ id => this.onResolve(id)}
      />
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should renders minimun data', () => {
    const div = document.createElement('div');

    const mock =  {    
      id: 'id123',
      state: 'OPEN',
      payload: {
          reportType: 'SPAM',
          message: 'fooo',
      }
    }

    ReactDOM.render(
      <Item 
        key={ mock.id } 
        data={ mock }
        onBlockClick={ id => this.onBlock(id)}
        onResolveClick={ id => this.onResolve(id)}
      />
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should renders missing data', () => {
    const div = document.createElement('div');

    const mock =  {    
      id: 'id123',
      payload: {
      }
    }

    ReactDOM.render(
      <Item 
        key={ mock.id } 
        data={ mock }
        onBlockClick={ id => this.onBlock(id)}
        onResolveClick={ id => this.onResolve(id)}
      />
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should renders even missing payload', () => {
    const div = document.createElement('div');

    const mock =  {    
      id: 'id123'
    }

    ReactDOM.render(
      <Item 
        key={ mock.id } 
        data={ mock }
        onBlockClick={ id => this.onBlock(id)}
        onResolveClick={ id => this.onResolve(id)}
      />
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should renders even if there is no id', () => {
    const div = document.createElement('div');

    const mock =  {    
    }

    ReactDOM.render(
      <Item 
        key={ mock.id } 
        data={ mock }
        onBlockClick={ id => this.onBlock(id)}
        onResolveClick={ id => this.onResolve(id)}
      />
    , div);
    ReactDOM.unmountComponentAtNode(div);
});
