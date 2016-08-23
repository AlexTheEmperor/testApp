require 'digest'

class PagesController < ApplicationController
	before_filter :logged_in?, :except => [:login]

	def index
	end

	def about
	end

	def map
	end

	def login
		@error = nil
		if request.post?
			username = params[:login]['username']
			password = params[:login]['password']
			sha = Digest::SHA256.new
			pass_hash = sha.hexdigest password
			@user = User.find_by(:username => username, :password => pass_hash)
			if @user
				session[:id] = @user[:id]
				redirect_to root_path
			else
				@error = "Wrong username / password"
				render 'login'
			end
		end		
	end

	def logout
		if session[:id]
			session[:id] = nil
			redirect_to login_path
		end
	end
end
