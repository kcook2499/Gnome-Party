#pragma strict

private var numberNumber;
function Start () {

}

function Update ()
{
	var playerObject = this.transform.parent;
	var playerObjectController = playerObject.GetComponent(PlayerController);
	var numberNumber : int = playerObjectController.rollNumber;
	var numberNumberNumber : int = playerObjectController.rolledNumber;
	
	var textMesh = GetComponent.<TextMesh>();
	if (numberNumberNumber > 0)
	{
		if (numberNumber+1 > 0)
		{
			if (numberNumber+1 > numberNumberNumber)
				textMesh.text = (numberNumberNumber).ToString();
			else
				textMesh.text = (numberNumber+1).ToString();
		}
		else
		textMesh.text = "";
	}
	else
		textMesh.text = "";
	transform.rotation = Quaternion.identity;
}