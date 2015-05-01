// check that the userId specificed owns the documens
ownsDocument = function(userId, doc) {
	return doc && doc.userId === userId;
}
