class ApplicationController < ActionController::Base
	protect_from_forgery with: :exception
	def logged_in?
		unless session[:id]
			@error = "Please log in"
			redirect_to login_path
			return false
		else
			return true
		end
	end
end
