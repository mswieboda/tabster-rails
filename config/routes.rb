Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root 'tabs#index'
  get 'tabs', to: 'tabs#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
