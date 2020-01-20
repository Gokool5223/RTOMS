package net.devmanuals.validators;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;

import net.devmanuals.model.User;
import net.devmanuals.service.UserService;
import net.devmanuals.utils.Encryption;

@Component("userLoginValidator")
public class UserLoginValidator {
	@Autowired
	private UserService userService;

	public boolean supports(Class<?> klass) {
		return User.class.isAssignableFrom(klass);
	}

	public void validate(Object target, Errors errors) {
		User user = (User) target;
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "userEmail",
				"NotEmpty.user.userEmail", "User Email must not be Empty.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password",
				"NotEmpty.user.password", "Password must not be Empty.");

		if ((user.getUserEmail() != null) && (user.getUserEmail().length() > 0)) {
			user.setUserEmail(user.getUserEmail().trim());
			List userlist = userService.validateLoginUser(user.getUserEmail(),Encryption.encrypt(user.getPassword())
					);
			if ((userlist != null) && (userlist.size() > 0)) {
			} else {
				errors.rejectValue("userEmail",
						"notMatchEmailAndPassword.user.userEmail",
						"User Email or Password you entered is incorrect.");
			}

		}

	}

}
